/* eslint-disable react/no-array-index-key */
import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'layouts/DashboardLayout';
import NotFound from 'components/NotFound';

const Billing = lazy(() => import('pages/reports/Billing'));
const Book = lazy(() => import('pages/Book'));
const Client = lazy(() => import('pages/Client'));
const ClientBilling = lazy(() => import('pages/reports/ClientBilling'));
const ClientBook = lazy(() => import('pages/ClientBook'));
const ClientInvoice = lazy(() => import('pages/ClientInvoice'));
const ClientProducts = lazy(() => import('pages/Products'));
const Clients = lazy(() => import('pages/Clients'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const DeliveryOrder = lazy(() => import('pages/DeliveryOrder'));
const DeliveryOrdersReport = lazy(() => import('pages/reports/DeliveryOrders'));
const Expenses = lazy(() => import('pages/Expenses'));
const Invoice = lazy(() => import('pages/Invoice'));
const Login = lazy(() => import('pages/Login'));
const Notes = lazy(() => import('pages/Notes'));
const Payments = lazy(() => import('pages/Payments'));
const PaymentsReport = lazy(() => import('pages/reports/PaymentsReport'));
const PriceChanges = lazy(() => import('pages/PriceChanges'));
const Product = lazy(() => import('pages/Product'));
const ProductsReport = lazy(() => import('pages/reports/ProductsReport'));
const Providers = lazy(() => import('pages/Providers/Providers'));
const Provider = lazy(() => import('pages/Providers/Provider'));
const ProviderExpense = lazy(() => import('pages/Providers/ProviderExpense'));
const ProviderGeneral = lazy(() => import('pages/Providers/ProviderGeneral'));
const SwapInvoices = lazy(() => import('pages/SwapInvoices'));

const year = new Date().getFullYear();

const routesConfig = [
  {
    path: '/',
    element: () => <Navigate to='/login' replace />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='/app/informes/inicio' replace />,
      },
      {
        path: 'informes',
        element: <Navigate to='/app/informes/inicio' replace />,
      },
      {
        path: 'informes/inicio',
        element: <Dashboard />,
      },
      {
        path: 'informes/productos',
        element: <ProductsReport />,
      },
      {
        path: 'informes/facturacion/:year',
        element: <Billing />,
      },
      {
        path: 'informes/facturacion',
        element: <Navigate to={`/app/informes/facturacion/${year}`} replace />,
      },
      {
        path: 'informes/albaranes/:year',
        element: <DeliveryOrdersReport />,
      },
      {
        path: 'informes/albaranes',
        element: <Navigate to={`/app/informes/albaranes/${year}`} replace />,
      },
      {
        path: 'informes/pagares/:year',
        element: <PaymentsReport />,
      },
      {
        path: 'informes/pagares',
        element: <Navigate to={`/app/informes/pagares/${year}`} replace />,
      },
      {
        path: 'proveedores',
        element: <Providers />,
      },
      {
        path: 'proveedores/:idProvider',
        element: <Provider />,
      },
      {
        path: 'albaranes/:idDeliveryOrder',
        element: <DeliveryOrder />,
      },
      {
        path: 'facturas/:idInvoice',
        element: <Invoice />,
      },
      {
        path: 'productos/:id',
        element: <Product />,
      },
      {
        path: 'libro/:year',
        element: <Book />,
      },
      {
        path: 'pagos',
        element: <Payments />,
      },
      {
        path: 'notas/:year',
        element: <Notes />,
      },
      {
        path: 'notas',
        element: <Navigate to={`/app/notas/${year}`} replace />,
      },
      {
        path: 'gastos/:idProvider',
        element: <ProviderExpense />,
      },
      {
        path: 'gastos',
        element: <Expenses />,
      },
      {
        path: 'proveedores/general/:idProvider',
        element: <ProviderGeneral />,
      },
      {
        path: 'intercambio',
        element: <SwapInvoices />,
      },
      {
        path: 'precios',
        element: <PriceChanges />,
      },
      {
        path: 'clientes',
        element: <Clients />,
      },
      {
        path: 'clientes/productos',
        element: <ClientProducts />,
      },
      {
        path: 'clientes/factura/:idInvoice',
        element: <ClientInvoice />,
      },
      {
        path: 'clientes/libro/:year',
        element: <ClientBook />,
      },
      {
        path: 'clientes/facturacion',
        element: <Navigate to={`/app/clientes/facturacion/${year}`} replace />,
      },
      {
        path: 'clientes/facturacion/:year',
        element: <ClientBilling />,
      },
      {
        path: 'clientes/:id',
        element: <Client />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const Routes = () => {
  const routes = useRoutes(routesConfig);
  return routes;
};

export default Routes;
