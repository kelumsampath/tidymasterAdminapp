var config=require('./config');


var mydata=module.exports.data={
  picurl:"http://chittagongit.com//images/user-icon-jpg/user-icon-jpg-11.jpg",
  username:"",
  postid:""
}

module.exports.profdata=(token)=>{
  fetch(config.config.hostname+'/admin/profpic', {
    method: 'POST',
    headers: {
      "Authorization": token,
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
      test:"test"
    }),
})

    .then((response) => response.json())
    .then((res) => {

        if (res.state === true) {
         // alert(res.data.username+' '+res.data.url)
          mydata.picurl=res.data.url
          mydata.username=res.data.username
        } else {
            console.warn("Side menu image load fail")
        }
    })
    .done();
}