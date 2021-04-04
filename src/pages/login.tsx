import React, { useState } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const LogIn = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setError('');
            setIsLoading(true);
            await login(email, password);
            history.push('/');
        } catch {
            setError('Failed to create an account')
        }
        setIsLoading(false)
    }

    return (
        <>
            <Container style={{ minHeight: '100vh' }} className="w-100 d-flex justify-content-center align-items-center">
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center mb-4" as="h2">Log In</Card.Title>
                            {
                                error && <Alert variant="danger">{error}</Alert>
                            }
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" required onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" required onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Button type="submit" disabled={isLoading} className="w-100">Log In</Button>
                            </Form>
                        </Card.Body>
                        <Card.Footer>Need an account? <Link to="/signup">Sign Up</Link></Card.Footer>
                    </Card>
                </div>
            </Container>
        </>
    )
}

export default LogIn;