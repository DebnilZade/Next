import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
    name: {
      /* The name of this task */
  
      type: String,
      required: [true, 'Please provide a name for this client.'],
      maxlength: [60, 'Name cannot be more than 20 characters'],
    },
    status: {
     
      type: String,
      required: [true, "Please select a status"]
    }  
    
  });
  

  export default mongoose.models?.Client || mongoose.model('Client', ClientSchema)