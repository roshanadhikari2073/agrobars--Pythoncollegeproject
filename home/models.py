from django.db import models
from django.conf import settings
from django.utils.text import slugify
from django.db.models.signals import pre_save
from django.urls import reverse
# from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.


class Address(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        # return reverse("home:addressSeller", kwargs={"name": self.name})
        return '/address/%s/' % self.name

["__str__","userimage", "vegetable", "address", "phonenumber","image","date","price", "quantity","chatroom"]

class Seller(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True, null=True)
    userimage = models.ImageField(upload_to='story/', default='default.jpg')
    vegetable = models.CharField(max_length=180)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, default=None)
    phonenumber = models.CharField(max_length=10)
    image = models.ImageField(upload_to='story/', default='default.jpg')
    date = models.DateTimeField()
    price = models.IntegerField(max_length=20)
    quantity = models.IntegerField(max_length=20)
    chatroom = models.CharField(max_length=100)
    def __str__(self):
        return self.name


    def get_absolute_url(self):
        return reverse("home:sellerDetail", kwargs={"slug": self.slug})


    class Meta:
        ordering = ["-date"]
        verbose_name = "Seller"
        verbose_name_plural = "Seller"


def create_slug(instance, new_slug=None):
    slug = slugify(instance.name)
    if new_slug is not None:
        slug = new_slug

    qs = Seller.objects.filter(slug=slug).order_by("-date")
    exists = qs.exists()
    if exists:
        new_slug = "%s-%s" % (slug, qs.first().date)
        return create_slug(instance, new_slug=new_slug)
    return slug


def pre_save_post_receiver(sender, instance, *args, **kwargs):
    instance.slug = create_slug(instance)
    # do other stuffs here


pre_save.connect(pre_save_post_receiver, sender=Seller)

