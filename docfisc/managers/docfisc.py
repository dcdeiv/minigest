""" isort:skip_file """

from django.db import models

from ..helpers.docfisc import (
    iva_aliquote_queryset,
    riepilogo_reparti_queryset,
    riepilogo,
)


class DocFiscQuerySet(models.QuerySet):
    def data(self, data):
        return self.filter(data__icontains=data)

    def dal_al(self, dal, al):
        return self.filter(data__range=(dal, al))

    def ricevute(self):
        return self.filter(data_ricezione__isnull=False)

    def periodo(self, dal=None, al=None):
        if al is None:
            if dal is None:
                query = self.all()
            else:
                query = self.data(dal)
        else:
            query = self.dal_al(dal, al)

        return query

    def iva_aliquote(self):
        return iva_aliquote_queryset(self)

    def riepilogo_reparti(self):
        return riepilogo_reparti_queryset(self)

    def riepilogo(self):
        return riepilogo(self)


class DocFiscManager(models.Manager):
    def get_queryset(self):
        return DocFiscQuerySet(self.model, using=self._db)

    def periodo(self, dal=None, al=None):
        return self.get_queryset().periodo(dal, al)

    def ricevute(self):
        return self.get_queryset().ricevute()

    def iva_aliquote(self):
        return self.get_queryset().iva_aliquote()

    def riepilogo_reparti(self):
        return self.get_queryset().riepilogo_reparti()

    def riepilogo(self):
        return self.get_queryset().riepilogo()
