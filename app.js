var cheerio = require('cheerio')
var request = require('request') 

//writestream 

//writeStream.write('title', price, stock \n'); 

request('http://books.toscrape.com/', (error, response, html) => { 
if(!error && response.statusCode == 200){ 
  //keep 
  const $ = cheerio.load(html); 
  

  
  
  
  console.log('prints all the titles of books') 
  $('h3 a').each((i, el) => { 
    const href = $(el).text() ; 
    const hrefText = $(el).attr('title'); 
    console.log(hrefText); 
  }); 
  console.log(''); 
  console.log('print all the values of the books'); 
  $('.price_color').each((i, el) => { 
    const thing = $(el).text() ; 
    const link = $(el).attr('title'); 
    console.log(thing); 
  }); 
  console.log(''); 
  console.log('current stock of books'); 
  $('p.instock.availability').each((i, el) => { 
    
    const stock = $(el).text().replace(/\s\s+/g, '')
    console.log( stock);
    }); 
   
  
  
  console.log(''); 
  console.log('Putting all in the same line'); 
  $('article.product_pod').each((i, el) => 
           const title = $(el).find('a').text(); 
  
  
  
      
  
    const price = $(el).find('p.price_color').text(); 
  
  
    const stock = $(el).find('p.instock.availability').text().replace(/\s\s+/g, '');

              // console.log(title+'\t\t\t' + price + '\t\t\t'+  stock);

              //write to CSV

      writeStream.write(`${title}, ${price}, ${stock} \n`);



     });

  
  
  
