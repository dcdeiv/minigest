# Generated by Django 3.0.8 on 2020-07-17 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('anagrafica', '0003_auto_20200717_1827'),
    ]

    operations = [
        migrations.AlterField(
            model_name='soggettofiscale',
            name='cognome',
            field=models.CharField(blank=True, default=None, max_length=60, null=True),
        ),
        migrations.AlterField(
            model_name='soggettofiscale',
            name='nome',
            field=models.CharField(blank=True, default=None, max_length=60, null=True),
        ),
    ]
