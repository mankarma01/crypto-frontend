import { useState } from "react";

// Step 1: ID & Password
function Step1({ onNext }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const handleNext = () => {
    if (!id || !password || !verifyPassword) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    if (password !== verifyPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    onNext({ id, password });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
      <div className="flex flex-col items-center mb-6">
        <img src="/logo.svg" alt="Logo" className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-bold text-center">Join Membership</h2>
        <p className="text-sm text-gray-500 mt-1 text-center">Step 1 of 5</p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">ID (Email)</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Verify Password</label>
          <input
            type="password"
            placeholder="********"
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
      </form>
      <button
        onClick={handleNext}
        className="w-full mt-6 bg-pink-500 text-white py-2 rounded font-semibold hover:bg-pink-600 transition"
      >
        Next
      </button>
    </div>
  );
}

// Step 2: Personal Info
function Step2({ onNext, onBack }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const handleNext = () => {
    if (!fullName || !phone) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    onNext({ fullName, phone });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Step 2 of 5: Personal Info</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
      </form>
      <div className="flex justify-between mt-6">
        <button
          onClick={onBack}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Step 3: Address Info
function Step3({ onNext, onBack }) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const handleNext = () => {
    if (!address || !city) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    onNext({ address, city });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Step 3 of 5: Address Info</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
      </form>
      <div className="flex justify-between mt-6">
        <button onClick={onBack} className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">
          Back
        </button>
        <button onClick={handleNext} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
          Next
        </button>
      </div>
    </div>
  );
}

// Step 4: KYC / Verification
function Step4({ onNext, onBack }) {
  const [kycId, setKycId] = useState("");

  const handleNext = () => {
    if (!kycId) {
      alert("KYC ID를 입력해주세요.");
      return;
    }
    onNext({ kycId });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Step 4 of 5: KYC Verification</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">KYC ID</label>
          <input
            type="text"
            value={kycId}
            onChange={(e) => setKycId(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
      </form>
      <div className="flex justify-between mt-6">
        <button onClick={onBack} className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">
          Back
        </button>
        <button onClick={handleNext} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
          Next
        </button>
      </div>
    </div>
  );
}

// Step 5: Review & Submit
function Step5({ formData, onBack }) {
  const handleSubmit = () => {
    alert("회원가입 완료! 데이터: " + JSON.stringify(formData, null, 2));
    // Here you can send data to your backend API
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Step 5 of 5: Review & Submit</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm">{JSON.stringify(formData, null, 2)}</pre>
      <div className="flex justify-between mt-6">
        <button onClick={onBack} className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">
          Back
        </button>
        <button onClick={handleSubmit} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
          Submit
        </button>
      </div>
    </div>
  );
}

// Parent Component: Handles all 5 steps
export default function JoinMembership() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12 w-full">
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <Step3 onNext={handleNext} onBack={handleBack} />}
      {step === 4 && <Step4 onNext={handleNext} onBack={handleBack} />}
      {step === 5 && <Step5 formData={formData} onBack={handleBack} />}
    </div>
  );
}
