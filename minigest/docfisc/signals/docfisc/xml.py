import os

from django.conf import settings
from django.dispatch import receiver

from minigest.common.helpers import purge_empty_dirs
from ...models import DocumentoFiscale

from django.core.exceptions import ObjectDoesNotExist

from django.db.models.signals import post_delete, pre_save


@receiver(pre_save, sender=DocumentoFiscale)
def xml_check(sender, instance, **kwargs):
    # controlla se l'istanza è nuova o no
    try:
        docfisc = DocumentoFiscale.objects.get(pk=instance.pk)
    except ObjectDoesNotExist:
        # se l'istanza è nuova lascia perdere
        pass
    else:
        # se l'istanza è stata modificata
        xml_old = docfisc.xml or None
        xml_new = instance.xml

        if xml_old is not None:
            # Se il file viene cambiato
            if xml_old != xml_new:
                # elimina il vecchio file
                if os.path.isfile(xml_old.path):
                    os.remove(xml_old.path)

        # Elimina i le cartelle vuote
        purge_empty_dirs(settings.MEDIA_ROOT, removeRoot=False)


@receiver(post_delete, sender=DocumentoFiscale)
def xml_delete(sender, instance, **kwargs):
    if instance.xml:
        xml = instance.xml

        # Rimuove il file
        os.remove(xml.path)

        # Elimina i le cartelle vuote
        purge_empty_dirs(settings.MEDIA_ROOT, removeRoot=False)
