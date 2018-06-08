# Ders.im Arama Modülü

**Tüm dokümanlar içerisinde arama yapmaya müsade eden modül**

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
    hitsPerPage: 3
  })
  .then(console.log)
  .catch(console.log)
```

## Katkıda bulunma

- [ ] Eklediğiniz veya çıkarttığınız özelliğin yok ise testini yaz
- [ ] Beni oku yazısına ürettiğiniz ürünün bilgisini ekle
- [ ] Gönder gelsin
