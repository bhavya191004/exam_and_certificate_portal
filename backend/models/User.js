const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        // Trim the password to remove leading/trailing spaces
        const trimmedPassword = v.trim();
        
        // Check if password is empty after trimming
        if (trimmedPassword.length === 0) {
          return false;
        }
        
        // Check for any spaces in the middle of the password
        if (/\s/.test(v)) {
          return false;
        }
        
        // Check minimum length after trimming
        if (trimmedPassword.length < 6) {
          return false;
        }
        
        return true;
      },
      message: props => {
        const trimmedPassword = props.value.trim();
        if (trimmedPassword.length === 0) {
          return 'Password cannot be empty or contain only spaces';
        }
        if (/\s/.test(props.value)) {
          return 'Password cannot contain blank spaces';
        }
        return 'Password must be at least 6 characters long';
      }
    }
  },
  role: {
    type: String,
    enum: ['student', 'examiner', 'admin'],
    default: 'student'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  
  // Trim the password before hashing
  this.password = this.password.trim();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to check if password matches
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword.trim(), this.password);
};

module.exports = mongoose.model('User', UserSchema);