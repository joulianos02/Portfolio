import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Les informations sur le projet pourraient venir d'un fichier de données séparé ou d'une API
const projects = [
  {
    id: 1,
    title: 'Projet 1',
    description: 'Description du projet 1',
    technologies: ['React', 'Node.js'],
  },
  {
    id: 2,
    title: 'Projet 2',
    description: 'Description du projet 2',
    technologies: ['React', 'MongoDB', 'Express.js', 'Node.js'],
  },
];

const Project = () => {
  return (
    <div className="container">
      {projects.map((project) => (
        <Card style={{ width: '18rem' }} key={project.id}>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>
              {project.description}
            </Card.Text>
            <h5>Technologies utilisées</h5>
            <ul>
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <Button variant="primary">Voir plus</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Project;
