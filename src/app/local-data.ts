export class LocalData {
  // tslint:disable-next-line: typedef
  loadData() {
    if (
      localStorage.getItem('companies') === null &&
      localStorage.getItem('products') === null
    ) {
      const companies = [
        {
          id: 10,
          companyName: 'Britannia',
          gst: 'Brit12annia',
        },
        {
          id: 11,
          companyName: 'Parle',
          gst: 'Parl13e',
        },
      ];
      const products = [
        {
          id: 20,
          productName: 'GoodDay Biscuits',
          companyName: 'Britannia',
          cost: 25,
        },
        {
          id: 21,
          productName: 'Monaco Biscuits',
          companyName: 'Parle',
          cost: 10,
        },
      ];
      const purchaseOrders = [];
      localStorage.setItem('companies', JSON.stringify(companies));
      localStorage.setItem('products', JSON.stringify(products));
      localStorage.setItem('purchaseOrders', JSON.stringify(purchaseOrders));
      localStorage.setItem(new Date().getFullYear().toString(), '1');
      return;
    }
  }
}
