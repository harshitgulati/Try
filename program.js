var Crawler = require("crawler");
var url = require('url');
var arr=[];
var request = require('request');
var cheerio = require('cheerio');
var jquery = require('jquery');
var bol=true;
var link;
var pages=[];
var dat=[];
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, result, $) {
        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server
        $('div.site_subnav').find('a').last().each(function(index, a) {
            var toQueueUrl ="http://www.colby.edu/museum/"+ $(a).attr('href');
        console.log(toQueueUrl);
        console.log($(a).text());
         if($(a).text()=='Next' && $(a).attr('href')!=''){
            c.queue(toQueueUrl);
                arr.push(toQueueUrl);
}
        else if($(a).text()=='Previous'){
fun();
funct();
}
        });
    }
});
c.queue('http://www.colby.edu/museum/?s=katz&obj=/PRT0?rec=13&sid=6835&x=214813');
var fun=function(){
for(var i=0;i<arr.length;i++){
link1=arr[i];
	request(link1,(function(link1){return function (error, response, html) {
console.log("before"+link1);
 if (!error && response.statusCode == 200) {
 var $ = cheerio.load(html);

    $('.imgtd a').each(function(i, element){
      var a = $(this);
      console.log("http://www.colby.edu/museum/"+a.attr('href'));
	var temp="http://www.colby.edu/museum/"+a.attr('href');
	pages.push(temp);
	console.log(pages.length);
	if(pages.length==624){
	out();
}
    });
    }
    }
    })(link1));
    }
return 0;}
var funct=function(){
console.log("i m here");
}
   
var out=function(){
for(var j=0;j<pages.length;j++){
var link2=pages[j];
        request(link2,(function(link2){return function (error, response, html) {
 if (!error && response.statusCode == 200) {
 var $ = cheerio.load(html);

    $('#objectinfo_bottominfo').each(function(i, element){
      var a = $(this);
	var b=$(this).closest(".content").children('#coll_lg_img').find('a').find('img');
      
	var img=b.attr('src');
	var info=a.text();
	var split=info.split('\n');
	console.log(split[2].trim());
	console.log(split[4].trim());
	console.log(split[7].trim());
console.log(split[8]);
console.log(split[9]);
console.log("hhh");
	var data={
	'image':img,
	'Artist':split[2].trim(),
	'Name_and_date':split[4].trim(),
	'Discription':split[7].trim(),
	'Dimensions':split[8],
	'Type':split[9]
};
dat.push(data);
if(dat.length==624){
console.log(dat);
console.log(dat[0].image);
}
    });
    }
    }
    })(link2));
    }
return 0;} 

