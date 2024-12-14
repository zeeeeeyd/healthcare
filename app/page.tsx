'use client'
import { ReactNode, useState, useEffect } from 'react';
import { 
  Heart, 
  RotateCw, 
  Home,
  Info,
  BookOpen,
  Gift,
  Calendar,
  FileText,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  ArrowRight,
  Brain,
  Users,
  Cpu,
  Activity
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Hero from '@/components/Hero';
import About from './about/page';
import Offers from './offers/page';
import Plan from './plan/page';
import Story from './story/page';
import Report from './report/page';
import GapInfo from './gap/page';
import Panic from './panic/page';
import SocialAnxiety from './social-anxiety/page';
import SpecificPhobias from './specific-phobias/page';
import Ptsd from './ptsd/page';
import Ocd from './ocd/page';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState('Home');
  const pathname = usePathname();

  useEffect(() => {
    const savedHeartState = localStorage.getItem('isHeartClicked');
    if (savedHeartState) {
      setIsHeartClicked(JSON.parse(savedHeartState));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('isHeartClicked', JSON.stringify(isHeartClicked));
  }, [isHeartClicked]);

  const componentMap: Record<string, JSX.Element> = {
    Home: <Hero />,
    'About Us': <About />,
    'Story Behind': <Story />,
    Offers: <Offers />,
    Plan: <Plan />,
    Report: <Report />,
    Gap: <GapInfo />,
    Panic : <Panic />,
    Social : <SocialAnxiety />,
    Specific : <SpecificPhobias />,
    Ptsd : <Ptsd />,
    Ocd : <Ocd />,
  
  };

  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Story Behind', href: '/story', icon: BookOpen },
    { name: 'Offers', href: '/offers', icon: Gift },
    { name: 'Plan', href: '/plan', icon: Calendar },
      // { name: 'Report', href: '/report', icon: FileText },
  ];

  const catalogItems = [
    { 
      name: 'Generalized Anxiety Disorder (GAD)', 
      icon: Brain,
      color: 'bg-blue-500',
      key : 'Gap'
    },
    { 
      name: 'Panic Disorder', 
      age: 'De 6 à 16 ans',
      icon: Users,
      color: 'bg-green-500',
      key : 'Panic'
    },
    { 
      name: 'Social anxiety Disorder', 
      age: 'De 8 à 80 ans',
      icon: Activity,
      color: 'bg-purple-500',
      key : 'social'
    },
    { 
      name: 'Specific phobias', 
      age: 'De 12 à 90 ans',
      icon: Cpu ,
      color: 'bg-orange-500',
      key : 'Specific'
    },
    { 
      name: 'Post-Traumatic Stress Disorder (PTSD)', 
      age: 'De 12 à 90 ans',
      icon: Cpu ,
      color: 'bg-orange-500',
      key : 'Ptsd'
    },
    { 
      name: 'Obsessive-Compulsive Disorder(OCD)', 
      age: 'De 12 à 90 ans',
      icon: Cpu ,
      color: 'bg-orange-500',
      key : 'Ocd'
    }
  ];

  const handleView = (itemName: string) => {
    setActiveItem(itemName);
  };  

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/onboarding-img.png)' }}>
      {/* Header */}
      <div className="w-[90%] md:w-[80%] mt-4 pl-3 md:pl-8 pr-2 py-3 bg-black rounded-full bg-opacity-45 flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <button
          onClick={() => setIsHeartClicked(!isHeartClicked)} 
          >
            {isHeartClicked ? <Heart /> : <Heart fill='red' stroke='red'/>}
          </button>
          <button
          onClick={() => window.location.reload()} >
            <RotateCw />
          </button>
        </div>
        <h1 className="text-md md:text-xl font-semibold text-green-500">MindSpace VR</h1>
        <div>
          <Link 
          href='/controlPanel'
          className="py-2 px-2 md:px-4 bg-green-500 bg-opacity-80 rounded-3xl transition-all">
            Get Started
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-5 w-[90%]">
        <section
          className={`flex flex-col items-center justify-start h-full gap-5 py-4 px-2 bg-black bg-opacity-50 rounded-3xl transition-all duration-300 ease-in-out relative ${
            isExpanded ? 'w-48' : 'w-12'
          }`}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex justify-center items-center hover:bg-gray-600 p-2 rounded-lg transition-colors w-8 h-8"
          >
            {isExpanded ? (
              <ChevronLeft className="text-gray-300 w-5 h-5" />
            ) : (
              <ChevronRight className="text-gray-300 w-5 h-5" />
            )}
          </button>
          <ul className="space-y-4 w-full">
            {menuItems.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <button
                onClick={() => setActiveItem(name)}
                className={`flex items-center gap-3 ${isExpanded ? 'px-4' : 'px-2'} py-2 rounded-full ${
                  activeItem === name
                    ? 'bg-green-500 text-white'
                    : 'hover:bg-gray-600 hover:text-white'
                }`}
              >
                 <Icon 
                    className={`w-5 h-5 flex-shrink-0 ${
                      pathname === href ? 'text-white' : 'text-gray-300'
                    }`} 
                  />
                  {isExpanded && <span className="whitespace-nowrap">{name}</span>}
              </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Main Content Area */}
        <div className="w-full bg-black bg-opacity-60 rounded-3xl p-8">
          {componentMap[activeItem]}
        </div>
      </div> 
      <div className='w-[90%] flex items-start justify-start gap-4 mt-8'>
          <div className='bg-black bg-opacity-60 p-6 rounded-3xl w-full'>
            <h1 className="text-xl font-semibold mb-4">Catalogue de nos tests</h1>
            <div className="grid grid-cols-2 gap-2">
            {catalogItems.map(item => (
              <div 
                key={item.name}
                className="p-4 rounded-2xl bg-gray-700 hover:bg-gray-800 transition-all cursor-pointer group"
                onClick={() => handleView(item.key)}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${item.color} bg-opacity-20`}>
                    <item.icon className={`w-5 h-5 ${item.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-medium group-hover:text-white transition-colors">{item.name}</h2>
                    {/* <p className="text-sm text-gray-400">{item.age}</p> */}
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}

            </div>
          </div>
          <div className='bg-black bg-opacity-60 p-6 rounded-3xl w-[40%]'>
            <h1 className="text-xl font-semibold mb-4">Contact us</h1>
            <div className="space-y-4">
              <a 
                href="mailto:123@example.com" 
                className="flex items-center gap-3 p-4 rounded-2xl bg-gray-700 hover:bg-gray-800 transition-all group cursor-pointer"
              >
                <div className="p-2 rounded-xl bg-blue-500 bg-opacity-20">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <span className="group-hover:text-white transition-colors">123@example.com</span>
              </a>
              
              <a 
                href="tel:0123456789" 
                className="flex items-center gap-3 p-4 rounded-2xl bg-gray-700 hover:bg-gray-800 transition-all group cursor-pointer"
              >
                <div className="p-2 rounded-xl bg-green-500 bg-opacity-20">
                  <Phone className="w-5 h-5 text-green-500" />
                </div>
                <span className="group-hover:text-white transition-colors">01 23 45 67 89</span>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Layout;
