from datetime import date, datetime


def oggi_aperto(self, data=None):
    if data is None:
        data = date.today()
    else:
        data = datetime.strptime(data, "%Y-%m-%d")

    if self.orari.all() is None:
        return False
    else:
        weekday = data.weekday()
        weekday = str(weekday)
        orario = self.orari.filter(giorno__iexact=weekday)

        if len(orario) == 0:
            return False
        else:
            varianti = self.orari_varianti.filter(dal__lte=data, al__gte=data)

            return True if len(varianti) == 0 else False
