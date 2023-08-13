// mongoose helps in enforcing schema at app layer
import mongoose from 'mongoose';

// extract Schema from mongoose using destructuring
const { Schema } = mongoose;

// task schema
const taskSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		completed: {
			type: Boolean,
			required: true,
			default: false,
    },
    // relation with the user based on the ObjectId
		user: {
      type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Task', taskSchema);
