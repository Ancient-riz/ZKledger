import { useState } from 'react';
import { Lock, Mail, User, GraduationCap, AlertCircle, Shield, Building2, Briefcase, ArrowLeft, Eye, EyeOff, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type PageView = 'admin' | 'student' | 'institution' | 'verify';

interface LoginPageProps {
  onLogin: (role: PageView, userInfo: { name: string; email: string }) => void;
  onBack: () => void;
}

const mockUsers = {
  admin: {
    email: 'admin@acadchain.com',
    password: 'admin123',
    name: 'System Administrator',
    role: 'admin' as PageView
  },
  institution: {
    email: 'institution@university.edu',
    password: 'inst123',
    name: 'University Registrar',
    role: 'institution' as PageView
  },
  student: {
    email: 'student@university.edu',
    password: 'student123',
    name: 'John Doe',
    role: 'student' as PageView
  },
  verify: {
    email: 'verifier@employer.com',
    password: 'verify123',
    name: 'HR Manager',
    role: 'verify' as PageView
  }
};

/* ================= ANIMATED GRADIENT MESH ================= */
function AnimatedMesh() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full"
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-red-500/20 rounded-full blur-3xl" />
      </motion.div>
      
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full"
        animate={{
          rotate: [360, 0],
        }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
}

/* ================= GLOWING PARTICLES ================= */
function GlowingParticles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}

/* ================= 3D MOVING SHAPES ================= */
function MovingShapes() {
  const shapes = [
    { type: 'cube', size: 60, x: 10, y: 20, delay: 0, duration: 8 },
    { type: 'pyramid', size: 50, x: 80, y: 15, delay: 1, duration: 10 },
    { type: 'cube', size: 40, x: 30, y: 70, delay: 2, duration: 9 },
    { type: 'pyramid', size: 55, x: 70, y: 60, delay: 0.5, duration: 11 },
    { type: 'cube', size: 45, x: 50, y: 40, delay: 1.5, duration: 9.5 },
    { type: 'ring', size: 70, x: 20, y: 50, delay: 2.5, duration: 12 },
    { type: 'ring', size: 50, x: 85, y: 80, delay: 1.2, duration: 10.5 },
    { type: 'cube', size: 35, x: 60, y: 10, delay: 0.8, duration: 8.5 },
    { type: 'pyramid', size: 45, x: 15, y: 85, delay: 1.8, duration: 9.8 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1000px' }}>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 180],
            y: [0, -50, 0, 50, 0],
            x: [0, 30, -30, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear",
          }}
        >
          {shape.type === 'cube' && (
            <div style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%' }}>
              {/* Front */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 backdrop-blur-sm"
                style={{ transform: 'translateZ(20px)' }} />
              {/* Back */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-500/30 backdrop-blur-sm"
                style={{ transform: 'translateZ(-20px) rotateY(180deg)' }} />
              {/* Right */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-red-500/20 border border-yellow-500/30 backdrop-blur-sm"
                style={{ transform: 'rotateY(90deg) translateZ(20px)' }} />
              {/* Left */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-yellow-500/20 border border-red-500/30 backdrop-blur-sm"
                style={{ transform: 'rotateY(-90deg) translateZ(20px)' }} />
              {/* Top */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 backdrop-blur-sm"
                style={{ transform: 'rotateX(90deg) translateZ(20px)' }} />
              {/* Bottom */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm"
                style={{ transform: 'rotateX(-90deg) translateZ(20px)' }} />
            </div>
          )}
          
          {shape.type === 'pyramid' && (
            <div style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-yellow-500/20 border border-red-500/30 backdrop-blur-sm"
                style={{ 
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  transform: 'rotateX(30deg)'
                }} />
            </div>
          )}
          
          {shape.type === 'ring' && (
            <div style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%' }}>
              <div className="absolute inset-0 rounded-full border-4 border-red-500/30 backdrop-blur-sm" />
              <div className="absolute inset-2 rounded-full border-4 border-orange-500/30" />
              <div className="absolute inset-4 rounded-full border-4 border-yellow-500/30" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ================= ROLE CARD ================= */
function RoleCard({ option, onClick, index }: any) {
  const Icon = option.icon;

  return (
    <motion.button
      onClick={onClick}
      className="group relative overflow-hidden bg-black/30 backdrop-blur-xl border border-red-500/20 
        hover:border-red-400/50 rounded-2xl p-6 transition-all duration-500
        hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, type: "spring" }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-yellow-500/10 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.5 }}
      />
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"
        transition={{ duration: 1 }}
      />

      <div className="relative z-10">
        <motion.div 
          className="w-14 h-14 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-xl
            flex items-center justify-center mb-4 mx-auto shadow-lg shadow-red-500/50"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
        </motion.div>
        
        <h3 className="text-lg font-bold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent mb-2">
          {option.title}
        </h3>
        <p className="text-sm text-gray-400">{option.description}</p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full 
        opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
    </motion.button>
  );
}

/* ================= MAIN LOGIN PAGE ================= */
export default function LoginPage({ onLogin, onBack }: LoginPageProps) {
  const [selectedRole, setSelectedRole] = useState<PageView | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    setError('');

    if (!selectedRole) {
      setError('Please select a role first');
      return;
    }

    if (isSignUp) {
      if (!name.trim() || !email.trim() || !password.trim()) {
        setError('Please fill in all fields');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
      onLogin(selectedRole, { name, email });
    } else {
      if (!email.trim() || !password.trim()) {
        setError('Please enter email and password');
        return;
      }
      onLogin(selectedRole, { name: email, email });
    }
  };

  const handleQuickLogin = (userType: keyof typeof mockUsers) => {
    const user = mockUsers[userType];
    onLogin(user.role, { name: user.name, email: user.email });
  };

  const roleOptions = [
    {
      role: 'admin' as PageView,
      title: 'Admin',
      description: 'Platform administrator',
      icon: Shield,
    },
    {
      role: 'student' as PageView,
      title: 'Student',
      description: 'View and share credentials',
      icon: GraduationCap,
    },
    {
      role: 'institution' as PageView,
      title: 'Institution',
      description: 'Issue credentials',
      icon: Building2,
    },
    {
      role: 'verify' as PageView,
      title: 'Employer',
      description: 'Verify credentials',
      icon: Briefcase,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      
      <AnimatedMesh />
      <GlowingParticles />
      <MovingShapes />

      {/* Scanlines effect */}
      <div className="fixed inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)',
        }}
      />

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 relative z-10">
        {/* Left Panel - Login */}
        <motion.div 
          className="bg-black/40 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-red-500/20
            shadow-red-500/10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-2xl blur-xl opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative p-4 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {!selectedRole ? (
              <motion.div
                key="role-selection"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="text-3xl font-bold text-center mb-3">
                  <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Select Your Role
                  </span>
                </h2>
                <p className="text-gray-400 text-center mb-8">
                  Choose your role to continue
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {roleOptions.map((option, i) => (
                    <RoleCard
                      key={option.role}
                      option={option}
                      onClick={() => setSelectedRole(option.role)}
                      index={i}
                    />
                  ))}
                </div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <button
                    onClick={onBack}
                    className="text-red-400/70 hover:text-red-300 text-sm font-medium transition-colors
                      flex items-center gap-2 mx-auto"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="login-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Role Badge */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => {
                      setSelectedRole(null);
                      setEmail('');
                      setPassword('');
                      setName('');
                      setError('');
                    }}
                    className="flex items-center text-red-400/70 hover:text-red-300 text-sm font-medium transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Change Role
                  </button>
                  
                  <div className="flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-red-500/20 to-yellow-500/20 
                    border border-red-500/30 rounded-full">
                    {(() => {
                      const selected = roleOptions.find(r => r.role === selectedRole);
                      if (!selected) return null;
                      const Icon = selected.icon;
                      return (
                        <>
                          <Icon className="w-4 h-4 text-red-400" />
                          <span className="text-sm font-semibold text-red-400">{selected.title}</span>
                        </>
                      );
                    })()}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-center mb-2">
                  <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                    {isSignUp ? 'Create Account' : 'Welcome Back'}
                  </span>
                </h2>
                <p className="text-gray-400 text-center mb-6">
                  {isSignUp ? 'Sign up to get started' : 'Sign in to continue'}
                </p>

                {error && (
                  <motion.div 
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-red-300">{error}</p>
                  </motion.div>
                )}

                <div className="space-y-4">
                  <AnimatePresence>
                    {isSignUp && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name
                        </label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 
                            group-focus-within:text-red-400 transition-colors" />
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                            className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl 
                              text-white placeholder-gray-500 
                              focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
                              transition-all outline-none"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 
                        group-focus-within:text-red-400 transition-colors" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                        className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl 
                          text-white placeholder-gray-500 
                          focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
                          transition-all outline-none"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Password
                    </label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 
                        group-focus-within:text-red-400 transition-colors" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                        className="w-full pl-12 pr-12 py-3 bg-black/50 border border-gray-700 rounded-xl 
                          text-white placeholder-gray-500 
                          focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
                          transition-all outline-none"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-400 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    className="w-full py-3 rounded-xl font-semibold text-white
                      bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500
                      hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]
                      transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSignUp ? 'Create Account' : 'Sign In'}
                      <Sparkles className="w-4 h-4" />
                    </span>
                  </motion.button>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => {
                      setIsSignUp(!isSignUp);
                      setError('');
                    }}
                    className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
                  >
                    {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Panel - Demo Credentials */}
        <motion.div 
          className="bg-black/40 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-red-500/20
            shadow-red-500/10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-3">
            <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              Demo Credentials
            </span>
          </h3>
          <p className="text-gray-400 mb-6">
            Use these credentials to explore different roles
          </p>

          <div className="space-y-4">
            {[
              { title: 'Administrator', email: 'admin@acadchain.com', password: 'admin123', key: 'admin' },
              { title: 'Institution', email: 'institution@university.edu', password: 'inst123', key: 'institution' },
              { title: 'Student', email: 'student@university.edu', password: 'student123', key: 'student' },
              { title: 'Employer', email: 'verifier@employer.com', password: 'verify123', key: 'verify' }
            ].map((cred, i) => (
              <motion.div
                key={cred.key}
                className="bg-black/30 backdrop-blur-md border border-gray-700 rounded-xl p-4
                  hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.1)]
                  transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-red-400">{cred.title}</h4>
                  <motion.button
                    onClick={() => handleQuickLogin(cred.key as keyof typeof mockUsers)}
                    className="px-4 py-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm 
                      rounded-lg font-medium hover:from-red-600 hover:to-orange-600
                      shadow-lg shadow-red-500/20 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Quick Login
                  </motion.button>
                </div>
                <p className="text-sm text-gray-400 mb-1">
                  <span className="text-gray-500">Email:</span>{' '}
                  <span className="font-mono bg-black/50 px-2 py-1 rounded text-gray-300">{cred.email}</span>
                </p>
                <p className="text-sm text-gray-400">
                  <span className="text-gray-500">Password:</span>{' '}
                  <span className="font-mono bg-black/50 px-2 py-1 rounded text-gray-300">{cred.password}</span>
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-6 p-4 bg-black/30 backdrop-blur-md border border-red-500/20 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-sm text-gray-400">
              <strong className="text-red-400">Note:</strong> This is a demo system. You can sign up with any email to explore.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}