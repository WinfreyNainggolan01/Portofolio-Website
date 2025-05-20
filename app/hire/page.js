"use client";

import React, {useState} from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation';

import {
	Checkbox
} from '@/components/ui/checkbox';

import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone Number',
        value: '+62 812 3456 7890',
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        value: 'winfreynggolan23@gmail.com',
    },
]

const skills = [
	{
		name: 'Web Development',
		value: 'web-development',

	},
	{
		name: 'Mobile Development',
		value: 'mobile-development',
	},
	{
		name: 'Backend Development',
		value: 'backend-development',
	},
	{
		name: 'IT Support',
		value: 'it-support',
	},
]

function launchWhatsApp(message) {
	const url = `https://wa.me/6287860464058?text=${encodeURIComponent(message)}`

	window.open(url, '_blank', 'noopener,noreferrer');
}

const Hire = () => {
	const router = useRouter();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [message, setMessage] = useState('');

	function handleWhatAppClick() {
		if (!firstName.trim() || !lastName.trim() || !email.trim() || !phoneNumber.trim()) {
		alert('Please fill in all required fields!');
		return;
		}
		const textWording = 
		`Hello, I’m ${firstName} ${lastName}.
I’m very interested in the skills and expertise you have. I would like to invite you to collaborate with me on an opportunity.

Skills that I am interested in:
${selectedSkills.join(', ')}

Message:
${message}

If you're interested, feel free to contact me via email at: ${email} or phone at: ${phoneNumber}.
Thank you, and I look forward to hearing from you.`;
		launchWhatsApp(textWording);
		router.push('/')
	}

	const [selectedSkills, setSelectedSkills] = useState([]);
	function handleSkillChange(value) {
		setSelectedSkills(prev =>
			prev.includes(value)
			? prev.filter(skill => skill !== value)
			: [...prev, value]
		);
	}

	return (
		<motion.section
		initial={{ opacity: 0 }}
		animate={{ 
		opacity: 1,
		transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
		}}
		className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					{/* Form */}
					<div className="xl:h-[54%] order-2 xl:order-none">
						<form 
						className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
						action="">
							<h3 className="text-4xl text-green-600">Let's work together</h3>
							<p className="text-white/60">
								Ready to bring your ideas to life? Whether you need a modern website, a custom application, or want to collaborate on an exciting project, I’m here to help you achieve your goals. Let’s create something impactful together!
							</p>
							{/* input */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="flex flex-col gap-1">
									<label className="text-white/80 font-medium">
										Firstname<span className="text-red-500">*</span>
									</label>
								<Input 
									type="text" 
									placeholder="Firstname" 
									required
									value={firstName}
									onChange={e => setFirstName(e.target.value)}
									/>
								</div>
								<div className="flex flex-col gap-1">
									<label className="text-white/80 font-medium">
										Lastname<span className="text-red-500">*</span>
									</label>
								<Input 
									type="text" 
									placeholder="Lastname" 
									required
									value={lastName}
									onChange={e => setLastName(e.target.value)}
									/>
								</div>
								<div className="flex flex-col gap-1">
									<label className="text-white/80 font-medium">
										Email address<span className="text-red-500">*</span>
									</label>
								<Input 
									type="email" 
									placeholder="Email address" 
									required
									value={email}
									onChange={e => setEmail(e.target.value)}
									/>
								</div>
								<div className="flex flex-col gap-1">
									<label className="text-white/80 font-medium">
										Phone number<span className="text-red-500">*</span>
									</label>
								<Input 
									type="tel" 
									placeholder="Phone number" 
									required
									value={phoneNumber}
									onChange={e => setPhoneNumber(e.target.value)}
								/>
								</div>
							</div>

							{/* checkbox */}
							<div className="flex flex-col gap-1">
								<label className="text-white/80 font-medium">
									Skills<span className="text-red-500">*</span>
								</label>
								<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
									{skills.map((skill, index) => (
									<div key={index} className="flex items-start gap-2">
										<Checkbox
										id={skill.value}
										checked={selectedSkills.includes(skill.name)}
										onCheckedChange={() => handleSkillChange(skill.name)}
										/>
										<div className="grid gap-1.5 leading-none">
										<label
											htmlFor={skill.value}
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80"
										>
											{skill.name}
										</label>
										</div>
									</div>
									))}
								</div>
							</div>
							{/* text area */}
							<Textarea 
								className="h-[200px]"
								placeholder="Type your message here."
								value={message}
								onChange={e => setMessage(e.target.value)}
							/>
							<div className="flex flex-row gap-5">
								<button
									type="button"
									onClick={handleWhatAppClick}
									aria-label="Chat via WhatsApp"
									className="flex items-center justify-center gap-5 px-5 py-3 border border-green-600 rounded-full max-w-50 text-green-600 hover:bg-green-600 hover:text-white transition"
									>
									Send message
									<FaWhatsapp className="text-2xl" />
								</button>
							</div>
							
						</form>
					</div>
					{/* Info */}
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">

					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Hire