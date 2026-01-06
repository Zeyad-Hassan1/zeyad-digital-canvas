const skills = [
  { name: 'Laravel', level: 95, category: 'Framework' },
  { name: 'PHP', level: 90, category: 'Language' },
  { name: 'MySQL', level: 85, category: 'Database' },
  { name: 'REST APIs', level: 90, category: 'Backend' },
  { name: 'Git', level: 85, category: 'Tools' },
  { name: 'PostgreSQL', level: 75, category: 'Database' },
  { name: 'Redis', level: 70, category: 'Cache' },
  { name: 'Docker', level: 65, category: 'DevOps' },
];

const technologies = [
  { name: 'Laravel', icon: '⚡' },
  { name: 'PHP', icon: '🐘' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'REST API', icon: '🔗' },
  { name: 'Git', icon: '📦' },
  { name: 'Composer', icon: '🎼' },
  { name: 'Eloquent ORM', icon: '💎' },
  { name: 'Blade', icon: '🔪' },
  { name: 'PHPUnit', icon: '🧪' },
  { name: 'Postman', icon: '📮' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Nginx', icon: '🌐' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-gradient">Technical</span> Skills
        </h2>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-card border border-border rounded-xl p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-xs font-mono text-primary">{skill.category}</span>
                </div>
                <span className="font-mono text-primary">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-bar-fill" 
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.15}s`
                  }} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="font-mono text-primary">{'<'}</span>
            Technologies
            <span className="font-mono text-primary">{' />'}</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name}
                className="bg-card border border-border rounded-xl p-4 text-center hover-lift hover-glow group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Code Snippet */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="bg-muted px-4 py-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-destructive" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="ml-4 text-sm font-mono text-muted-foreground">skills.php</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <p className="text-muted-foreground">{'<?php'}</p>
              <p className="mt-2">
                <span className="text-purple-400">class</span>{' '}
                <span className="text-yellow-400">ZeyadHassan</span>{' '}
                <span className="text-purple-400">extends</span>{' '}
                <span className="text-yellow-400">Developer</span>
              </p>
              <p>{'{'}</p>
              <p className="ml-4">
                <span className="text-purple-400">public function</span>{' '}
                <span className="text-blue-400">getSkills</span>(): <span className="text-yellow-400">array</span>
              </p>
              <p className="ml-4">{'{'}</p>
              <p className="ml-8">
                <span className="text-purple-400">return</span> [
              </p>
              <p className="ml-12 text-primary">{'"Laravel"'}, {'"PHP"'}, {'"MySQL"'},</p>
              <p className="ml-12 text-primary">{'"REST APIs"'}, {'"Clean Code"'}</p>
              <p className="ml-8">];</p>
              <p className="ml-4">{'}'}</p>
              <p>{'}'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
