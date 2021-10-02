const mongoose = require('mongoose');

const candidateSchema=mongoose.Schema({
    title:{
      type: 'string',
      required: true,  
    },
    name:'string',
    email: 'string',
    phone:'number',
    qualification: 'string',
    collegeName: 'string',

    

})


module.exports =candidateSchema;