def stringifylist(lista):
    str_list = list()

    for i in lista:
        if i is not None:
            i = str(i)
            str_list.append(i)

    return " ".join(str_list)
