# Generated by Django 3.0.6 on 2020-06-04 11:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tributi', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='ivaaliquota',
            options={'ordering': ('-data', '-aliquota'), 'verbose_name': 'Aliquota IVA', 'verbose_name_plural': 'Aliquote IVA'},
        ),
    ]