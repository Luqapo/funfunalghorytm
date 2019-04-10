function domainName(url) {
  const regex1 = /(\w+:\/\/|w+\.|\/)/g;
  const regex2 = /\.\w+$|\..\w+.\w+$/;
  const domain = url.replace(regex1, '').replace(regex2, '');
  return domain;
}

domainName('https://youtube.com');
domainName('http://www.zombie-bites.com');
domainName('http://google.co.jp');
