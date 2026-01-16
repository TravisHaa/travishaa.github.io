import { FocusInView } from './FocusInView';

interface CourseCategory {
  category: string;
  courses: string[];
}

const coursework: CourseCategory[] = [
  {
    category: 'General Computer Science',
    courses: [
      'CS32: Object Oriented Programming',
      'CS33: Introduction to Computer Organization',
      'CS35L: Software Construction',
      'CS118: Networking',
      'CSM51A: Logic Design and Digital Systems',
      'CSM152A: Digital Design',
      'ECE3: Introduction to Electrical Engineering'
    ]
  },
  {
    category: 'ML / AI',
    courses: [
      'ECE147: Deep Learning',
      'ECE239AS: Deep Learning II',
      'Computer Vision',
    ]
  },
  {
    category: 'Graphics / Vision',
    courses: [
      'CS188: Introduction To Robotics',
      'Computer Graphics',
      'Image Processing',
      'Interactive Systems',
      '3D Modeling'
    ]
  },
  {
    category: 'Theory',
    courses: [
      'CS131: Programming Languages',
      'CS180: Algorithms and Data Structures',
      'Math 61: Discrete Mathematics'
    ]
  }
];

export function CourseworkSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {coursework.map((category, categoryIndex) => (
        <FocusInView key={category.category} delay={categoryIndex * 0.08}>
          <div>
            <div className="text-sm mb-4 text-black/50">{category.category}</div>
            <div className="flex flex-wrap gap-2">
              {category.courses.map((course) => (
                <span
                  key={course}
                  className="px-3 py-2 rounded-full bg-white text-xs text-black/70"
                  style={{
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
                  }}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </FocusInView>
      ))}
    </div>
  );
}
