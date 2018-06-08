# Ders.im Arama Modülü

**Tüm dokümanlar içerisinde arama yapmaya müsade eden modül**

Ders.im'de binlerce ders dokümanı bulunmakta. Her bir ders dokümanı içerisinde binlerce karakter mevcut ve bu arama işlemini kendi uygulamanın içerisinde kullanabilirsin.

## Kurulum

```
yarn add ders-im-search
```


## Kullanım

[Ders.im](https://ders.im) algolia arama servisini kullanıyor, modülü kullanırken o parametreleri inceleyip ihtiyacınıza göre kullanabilirsiniz.

https://www.algolia.com/doc/api-reference/api-parameters/

```javascript
const searchDocument = require('ders-im-search');

searchDocument({
    query: 'yapay zeka',
    hitsPerPage: 2
  })
  .then(console.log)
  .catch(console.log)
```

### Örnek Çıktı

```js
[
  {
    title: 'Yapay Zekaya Giriş Ders Notları',
    displayName: 'Çağatay Çalı',
    thumbnail: '..',
    date: '4 ay önce',
    url: 'https://ders.im/dokuman/yapay-zekaya-giris-ders-notlari',
    publisher: 'https://ders.im/dokuman/cagataycali',
    keywords: 'Mühendislik,Bilgisayar Mühendisliği,Yapay Zeka',
    deepLink: {
      document: 'dersim://dersim/document/yapay-zekaya-giris-ders-notlari',
      publisher: 'dersim://dersim/user/cagataycali'
    }
  }, {
    title: 'Yapay zeka yaz okulu kitabı',
    displayName: 'Raif Berkay Dinçel',
    thumbnail: '...',
    date: '3 ay önce',
    url: 'https://ders.im/dokuman/yapay-zeka-yaz-okulu-kitabi',
    publisher: 'https://ders.im/dokuman/raifberkaydincel',
    keywords: 'Mühendislik,Bilgisayar Mühendisliği,Yapay Zeka',
    deepLink: {
      document: 'dersim://dersim/document/yapay-zeka-yaz-okulu-kitabi',
      publisher: 'dersim://dersim/user/raifberkaydincel'
    }
  }
]
```

## Katkıda bulunma

- [ ] Eklediğiniz veya çıkarttığınız özelliğin yok ise testini yaz
- [ ] Beni oku yazısına ürettiğiniz ürünün bilgisini ekle
- [ ] Gönder gelsin
