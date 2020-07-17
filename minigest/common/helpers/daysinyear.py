from datetime import date


def daysinyear(anno):
    primo = date(anno, 1, 1)
    ultimo = date(anno, 12, 31)
    delta = ultimo - primo

    return delta.days + 1
