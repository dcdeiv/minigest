# Generated by Django 3.0.6 on 2020-05-28 19:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fisco', '0002_tassoufficialeriferimento'),
        ('anagrafica', '0003_impresa_regime_fiscale'),
    ]

    operations = [
        migrations.AlterField(
            model_name='impresa',
            name='regime_fiscale',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='imprese', to='fisco.RegimeFiscale', to_field='codice'),
        ),
    ]