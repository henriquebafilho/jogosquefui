import { AuthGoogleProvider } from './contexts/authGoogle';
import { AppRoutes } from './routes/routes';
import VoltarAoTopo from '../src/components/VoltarAoTopo';

export function App() {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
      <VoltarAoTopo/>
    </AuthGoogleProvider>
  );
}