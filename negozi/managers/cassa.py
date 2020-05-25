from django.db import models


class CassaQuerySet(models.QuerySet):
    def chiusure(self, dal=None, al=None):
        chiusure = self.none()

        for cassa in self.all():
            chiusure = chiusure | cassa.chiusure.periodo(dal, al).prefetch_related("")

        return chiusure


class CassaManager(models.Manager):
    def get_queryset(self):
        return CassaQuerySet(self.model, using=self._db)

    def chiusure(self, dal=None, al=None):
        return self.get_queryset().chiusure(dal, al)
