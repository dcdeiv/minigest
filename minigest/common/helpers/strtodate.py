from datetime import date


def strtodate(data):
    if isinstance(data, date):
        return data
    else:
        data = data.split("-")
        return date(int(data[0]), int(data[1]), int(data[2]))
