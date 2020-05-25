def dir_docfisc_xml(instance, filename):
    path = "docfisc/{cedente}/fel/{anno}/{mese:02d}/{file}".format(
        cedente=instance.cedente.id,
        anno=instance.data.year,
        mese=instance.data.month,
        file=filename,
    )

    return path


def dir_docfisc_quietanza(instance, filename):
    ext = filename.split(".")[-1]
    data = instance.data.strftime("%Y%m%d")
    nuovo_nome = "{docfisc}-{data}.{ext}".format(
        docfisc=instance.docfisc.id, data=data, ext=ext
    )

    path = "docfisc/{cedente}/quietanze/{file}".format(
        cedente=instance.docfisc.cedente.id, file=nuovo_nome
    )

    return path
