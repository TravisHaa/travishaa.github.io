import { FocusInView } from './FocusInView';

interface CourseCategory {
  category: string;
  courses: string[];
}

const coursework: CourseCategory[] = [
  {
    category: 'Systems',
    courses: [
      'Computer Architecture',
      'Operating Systems',
      'Distributed Systems',
      'Computer Networks'
    ]
  },
  {
    category: 'ML / AI',
    courses: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing'
    ]
  },
  {
    category: 'Graphics / Vision',
    courses: [
      'Computer Graphics',
      'Image Processing',
      'Interactive Systems',
      '3D Modeling'
    ]
  },
  {
    category: 'Theory',
    courses: [
      'Algorithms',
      'Data Structures',
      'Theory of Computation',
      'Discrete Mathematics'
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
