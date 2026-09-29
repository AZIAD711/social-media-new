import { model, Schema } from "mongoose";
import { UserRoleEnum } from "../common/enum/user-role.enum.js";
import { ProviderEnum } from "../common/enum/provider.enum.js";
import { StatusAccountEnum } from "../common/enum/status-account.enum.js";
import { GenderEnum } from "../common/enum/gender.enum.js";
import { IUser } from "../common/interface/user.interface.js";

const noData = "No data provided!";

// USER SCHEMA
const userSchema = new Schema(
  {
    // FIRST NAME
    firstName: {
      type: String,
      minlength: 3,
      maxlength: 100,
      trim: true,
      required: true,
    },

    // LAST NAME
    lastName: {
      type: String,
      minlength: 3,
      maxlength: 100,
      trim: true,
      required: true,
    },

    // EMAIL
    email: {
      type: String,
      maxlength: 100,
      trim: true,
      unique: true,
      required: true,
    },

    // PASSWORD
    password: {
      type: String,
      maxlength: 6,
      trim: true,
      required: true,
      get() {
        return "******";
      },
    },

    // ADDRESS
    address: {
      type: String,
      trim: true,
      default: noData,
    },

    // GENDER
    gender: {
      type: String,
      enum: Object.values(GenderEnum),
    },

    // PHONE NUMBER
    phoneNumber: {
      type: String,
      minlength: 11,
      maxlength: 11,
      default: noData,
    },

    // AGE
    age: {
      type: Number,
      min: 18,
      max: 120,
    },

    // CONFIRM EMAIL
    confirmEmail: {
      type: Boolean,
      default: false,
    },

    // PROFILE IMAGE
    profileImage: {
      type: String,
      default: noData,
    },
    // ROLE 
    role: {
      type: String,
      enum: Object.values(UserRoleEnum),
      default: UserRoleEnum.USER
    },
    // PROVIDER 
    provider : {
      type : String,
      enum : Object.values(ProviderEnum),
      default : ProviderEnum.OWN
    },
    // CHANGE CREDINATILS 
    changeCredintals: Date,
    // STATUS ACCOUNT 
    statusAccount : {
      type : String,
      enum: Object.values(StatusAccountEnum),
      default : StatusAccountEnum.ACTIVE
    }
  },
  {
    strict: true,
    strictQuery: true,
    timestamps: true,
    collection: "user_data",
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
    versionKey: "version",
  }
);

// Virtual username (firstName + lastName)
userSchema.virtual("username").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const userModel = model<IUser>("User", userSchema);

export default userModel;