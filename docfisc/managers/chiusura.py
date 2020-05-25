""" isort:skip_file """

from django.db import models

from ..helpers.chiusura import (
    corrispettivi,
    iva_aliquote,
    riepilogo,
    riepilogo_reparti_queryset,
)


class ChiusuraQuerySet(models.QuerySet):
    def data(self, data):
        return self.filter(data__icontains=data)

    def dal_al(self, dal, al):
        return self.filter(data__range=(dal, al))

    def periodo(self, dal=None, al=None):
        if al is not None:
            return self.dal_al(dal, al)
        else:
            if dal is not None:
                return self.data(dal)
            else:
                return self.all()

    def iva_aliquote(self):
        return iva_aliquote(self)

    def riepilogo(self):
        return riepilogo(self)

    def riepilogo_reparti(self):
        return riepilogo_reparti_queryset(self)

    def corrispettivi(self, dal=None, al=None):
        chiusure = self.periodo(dal, al)
        return corrispettivi(chiusure)


class ChiusuraManager(models.Manager):
    def get_queryset(self):
        return ChiusuraQuerySet(self.model, using=self._db)

    def periodo(self, dal=None, al=None):
        return self.get_queryset().periodo(dal, al)

    def iva_aliquote(self):
        return self.get_queryset().iva_aliquote()

    def riepilogo(self):
        return self.get_queryset().riepilogo()

    def riepilogo_reparti(self):
        return self.get_queryset().riepilogo_reparti()

    def corrispettivi(self, periodo):
        return self.get_queryset().corrispettivi(periodo)
