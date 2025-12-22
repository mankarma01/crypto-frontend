import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api"; // adjust path if needed

// Step 1: ID & Password
function Step1({ onNext }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const handleNext = () => {
    if (!id || !password || !verifyPassword) {
      alert("모든 필드를 입력해주세요."); // "Please fill all fields"
      return;
    }
    if (password !== verifyPassword) {
      alert("비밀번호가 일치하지 않습니다."); // "Passwords do not match"
      return;
    }
    onNext({ id, password });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
      <div className="flex flex-col items-center mb-6">
        <img src="/logo.png" alt="Logo" className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-bold text-center">회원가입</h2>
        <p className="text-sm text-gray-500 mt-1 text-center">1단계 / 5단계</p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">이메일</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">비밀번호</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">비밀번호 확인</label>
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
        다음
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
      alert("모든 필드를 입력해주세요."); // "Please fill all fields"
      return;
    }
    onNext({ fullName, phone });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">2단계 / 5단계: 개인 정보</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">이름</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">전화번호</label>
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
          이전
        </button>
        <button
          onClick={handleNext}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          다음
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
      <h2 className="text-2xl font-bold text-center mb-4">3단계 / 5단계: 주소 정보</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">주소</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">도시</label>
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
          이전
        </button>
        <button onClick={handleNext} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
          다음
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
      alert("KYC ID를 입력해주세요."); // "Please enter KYC ID"
      return;
    }
    onNext({ kycId });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">4단계 / 5단계: KYC 인증</h2>
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
          이전
        </button>
        <button onClick={handleNext} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
          다음
        </button>
      </div>
    </div>
  );
}

// Step 5: Review & Submit
function Step5({ formData, onBack }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const payload = {
        name: formData.fullName,
        email: formData.id,
        password: formData.password,
        mobile_no: formData.phone,
        address: formData.address,
        city: formData.city,
        kyc_id: formData.kycId,
      };

      const response = await api.post("/api/signup", payload);
      alert("회원가입 성공!"); // "Signup successful"
       if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      navigate("/profile");
      console.log(response.data);
         
    } catch (error) {
      console.error(error);
      if(error.response?.status === 400){
        alert("you have missing fileds")
      }
      if (error.response?.status === 409) {
      // Email already exists
      alert("이미 존재하는 이메일입니다. email is already exit"); // "Email already exists"
    } else {
      alert(error?.response?.data?.message || "회원가입 실패"); // "Signup failed"
    }
      // alert(error?.response?.data?.message || "회원가입 실패"); // "Signup failed"
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { label: "이름", value: formData.fullName },
    { label: "이메일", value: formData.id },
    { label: "전화번호", value: formData.phone },
    { label: "주소", value: formData.address },
    { label: "도시", value: formData.city },
    { label: "KYC ID", value: formData.kycId },
  ];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">5단계 / 5단계: 확인 및 제출</h2>

      <div className="space-y-4">
        {fields.map((field) => (
          <div
            key={field.label}
            className="flex justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <span className="font-medium text-gray-700">{field.label}</span>
            <span className="text-gray-900 font-semibold">{field.value}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-medium"
        >
          이전
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`px-6 py-3 rounded-lg text-white font-medium transition ${
            loading ? "bg-gray-400" : "bg-pink-500 hover:bg-pink-600"
          }`}
        >
          {loading ? "제출 중..." : "제출"}
        </button>
      </div>
    </div>
  );
}


// Parent Component
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
