from django.db import models

from ..helpers.iva.aliquota import qanno, qdata, qmese


class IvaAliquotaQuerySet(models.QuerySet):
    def anno(self, anno=None):
        """ formato YYYY """
        return qanno(self, anno)

    def mese(self, mese=None):
        """ formato YYYY-MM """
        return qmese(self, mese)

    def data(self, data=None):
        """ formato YYYY-MM-DD """
        return qdata(self, data)


class IvaAliquotaManager(models.Manager):
    def get_queryset(self):
        return IvaAliquotaQuerySet(self.model, using=self._db)

    def anno(self, anno=None):
        """ formato YYYY """
        return self.get_queryset().anno(anno)

    def mese(self, mese=None):
        """ formato YYYY-MM """
        return self.get_queryset().mese(mese)

    def data(self, data=None):
        """ formato YYYY-MM-DD """
        return self.get_queryset().data(data)
