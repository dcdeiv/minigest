from django.db import models


class DocFiscPagamentoQuerySet(models.QuerySet):
    def data(self, data):
        return self.filter(data__icontains=data)

    def dal_al(self, dal, al):
        return self.filter(data__range=(dal, al))

    def periodo(self, dal=None, al=None):
        if al is None:
            if dal is None:
                query = self.all()
            else:
                query = self.data(dal)
        else:
            query = self.dal_al(dal, al)

        return query

    def committente(self, committente):
        return self.filter(docfisc__committente=committente)

    def totale(self):
        totale = self.all().aggregate(models.Sum("importo"))
        return totale["importo__sum"]


class DocFiscPagamentoManager(models.Manager):
    def get_queryset(self):
        return DocFiscPagamentoQuerySet(self.model, using=self._db)

    def data(self, data=None):
        return self.get_queryset().data(data)

    def dal_al(self, dal=None, al=None):
        return self.get_queryset().dal_al(dal, al)

    def periodo(self, dal=None, al=None):
        return self.get_queryset().periodo(dal, al)

    def committente(self, committente):
        return self.get_queryset().committente(committente)

    def totale(self):
        return self.get_queryset().totale()
