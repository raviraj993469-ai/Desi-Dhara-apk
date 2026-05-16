const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true, unique: true },
  name: String,
  email: String,
  address: {
    flat: String,
    building: String,
    area: String,
    landmark: String,
    pincode: String,
    lat: Number,
    lng: Number
  },
  role: { type: String, enum: ['customer', 'admin', 'delivery'], default: 'customer' },
  walletBalance: { type: Number, default: 0 },
  referralCode: String,
  createdAt: { type: Date, default: Date.now }
});

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  unit: { type: String, default: '500ml' },
  category: { type: String, enum: ['Milk', 'Ghee', 'Paneer', 'Curd', 'Organic'] },
  imageUrl: String,
  isSubscriptionAvailable: { type: Boolean, default: false }
});

const SubscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  frequency: { type: String, enum: ['daily', 'alternate', 'custom'], default: 'daily' },
  slot: { type: String, enum: ['morning', 'evening'], default: 'morning' },
  startDate: { type: Date, required: true },
  status: { type: String, enum: ['active', 'paused', 'cancelled'], default: 'active' },
  pausedUntil: Date,
  customDays: [String] // ['Mon', 'Wed', 'Fri']
});

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  deliveryDate: Date,
  status: { type: String, enum: ['pending', 'out-for-delivery', 'delivered', 'failed'], default: 'pending' },
  deliveryBoyId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  otp: String,
  isPaid: { type: Boolean, default: false },
  paymentMethod: { type: String, enum: ['wallet', 'upi', 'cod'] }
});

module.exports = {
  User: mongoose.model('User', UserSchema),
  Product: mongoose.model('Product', ProductSchema),
  Subscription: mongoose.model('Subscription', SubscriptionSchema),
  Order: mongoose.model('Order', OrderSchema)
};
