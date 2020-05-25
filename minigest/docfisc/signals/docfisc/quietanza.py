import os

from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from minigest.common.helpers import purge_empty_dirs

from ...models import DocFiscPagamento


@receiver(pre_save, sender=DocFiscPagamento)
def quietanza_check(sender, instance, **kwargs):
    # controlla se l'istanza è nuova o no
    try:
        docfisc = DocFiscPagamento.objects.get(pk=instance.pk)
    except ObjectDoesNotExist:
        # se l'istanza è nuova lascia perdere
        pass
    else:
        # se l'istanza è stata modificata
        quietanza_old = docfisc.quietanza or None
        quietanza_new = instance.quietanza

        if quietanza_old is not None:
            # Se il file viene cambiato
            if quietanza_old != quietanza_new:
                # elimina il vecchio file
                if os.path.isfile(quietanza_old.path):
                    os.remove(quietanza_old.path)

        # Elimina i le cartelle vuote
        purge_empty_dirs(settings.MEDIA_ROOT, removeRoot=False)


@receiver(post_delete, sender=DocFiscPagamento)
def quietanza_delete(sender, instance, **kwargs):
    if instance.quietanza:
        quietanza = instance.quietanza

        # Rimuove il file
        os.remove(quietanza.path)

        # Elimina i le cartelle vuote
        purge_empty_dirs(settings.MEDIA_ROOT, removeRoot=False)
