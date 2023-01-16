import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    taskname: {
      /* The name of this task */
  
      type: String,
      required: [true, 'Please provide a name for this task.'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    status: {
     
      type: String,
      required: [true, "Please select a task"]
    },    
    client_id: {
     
      type: Number,
    }
    
    
  });
  

  export default mongoose.models?.Task || mongoose.model('Task', TaskSchema)