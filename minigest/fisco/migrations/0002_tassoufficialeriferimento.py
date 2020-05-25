# Generated by Django 3.0.6 on 2020-05-25 14:43

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fisco', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TassoUfficialeRiferimento',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.DateField()),
                ('percentuale', models.DecimalField(decimal_places=2, max_digits=19, validators=[django.core.validators.MinValueValidator(0.0)])),
            ],
            options={
                'verbose_name': 'Tasso Ufficiale di Riferimento',
                'verbose_name_plural': 'Tassi ufficiali di Riferimento',
                'ordering': ('-data',),
            },
        ),
    ]