import mongoose from "mongoose";

const strR = {
  type: String,
  required: true,
};

const strNR = {
  type: String,
};

const nestedOptGprsSchema = new mongoose.Schema({
  prov: {
    type: String,
    required: true,
  },
  cntxId: {
    type: String,
    required: true,
  },
});

const servicesSchema = {
  clip: {
    prov: strNR,
  },
  smsmt: strNR,
  optgprss: {
    optgprs: {
      type: [nestedOptGprsSchema],
      required: true,
    },
  },
  odboc: {
    odboc: strR,
  },
  odbroam: {
    odbroam: strR,
  },
  category: {
    category: strR,
  },
  eps: {
    prov: strR,
  },
  smdp: strR,
};

const DataSchema = new mongoose.Schema(
  {
    GetResponseSubscriber: {
      imsi: strR,
      msisdn: strR,
      hlrsn: strR,
      cardType: strNR,
      nam: strR,
      services: {
        type: servicesSchema,
        required: true,
      },
      rroption: strNR,
      skey: strNR,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.model("Data", DataSchema);
export default Data;
