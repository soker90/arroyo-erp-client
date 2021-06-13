import RoutesWrapper from 'story/RoutesWrapper';
import { action } from '@storybook/addon-actions';
import PaymentsReportView from './PaymentsReportView';
import { ReduxProvider } from '../../../../story';

export default {
  title: 'Rutas/Informes/Pagares',
  parameters: {
    component: PaymentsReportView,
  },
  decorators: [Story => (
    <ReduxProvider>
      <RoutesWrapper route='/path/:year' path='/path/2020'>
        <Story />
      </RoutesWrapper>
    </ReduxProvider>
  ),
  ],
};

const PaymentsReport = () => (
  <PaymentsReportView
    cheques={[
      {
        _id: '5f873dfd7fe519380fcb1a3a',
        nOrder: 7,
        nameProvider: 'Otro',
        total: 32.32,
        payment: {
          paymentDate: 1602540000000,
          numCheque: 'PAG. 66662',
        },
      },
      {
        _id: '5f873dcc7fe519380fcb1a37',
        nOrder: 6,
        nameProvider: 'Otro',
        total: 40.26,
        payment: {
          paymentDate: 1603231200000,
          numCheque: 'PAG. 66661',
        },
      },
      {
        _id: '5f8424a1531db7363725a5fe',
        nOrder: 4,
        nameProvider: 'Gasto',
        total: 28.29,
        payment: {
          paymentDate: 1603317600000,
          numCheque: 'PAG. 66655',
        },
      },
      {
        _id: '5f7e138c15e88854b95b3cad',
        nameProvider: 'Gasto',
        total: 35.52,
        nOrder: 2,
        payment: {
          paymentDate: 1623794400000,
          numCheque: 'PAG. 66652',
        },
      },
      {
        _id: '5f873a1dac695d32476dd7ee',
        nOrder: 5,
        nameProvider: 'Gasto',
        total: 33.33,
        payment: {
          paymentDate: 1603666800000,
          numCheque: 'PAG. 66642',
        },
      },
      {
        _id: '5f7e13d515e88854b95b3cb1',
        total: 4.48,
        nameProvider: ' Prueba',
        nOrder: 3,
        payment: {
          paymentDate: 1623276000000,
          numCheque: 'PAG. 66640',
        },
      },
      {
        _id: '60bcbf58cd273624feb8daf2',
        total: 91776532225.5,
        nameProvider: 'La abuela',
        nOrder: 29,
        payment: {
          paymentDate: 1595109600000,
          numCheque: 'PAG. 66635',
        },
      },
      {
        _id: '5fa1bb1d57b82630b9887ef9',
        nOrder: 11,
        nameProvider: '546546',
        total: 21.63,
        payment: {
          paymentDate: 1605654000000,
          numCheque: 'PAG. 66633',
        },
      },
      {
        _id: '5f8f31c0f343871eabe01279',
        nOrder: 10,
        nameProvider: '546546',
        total: 40.26,
        payment: {
          paymentDate: 1603231200000,
          numCheque: 'PAG. 66632',
        },
      },
      {
        _id: '5f873e8a7fe519380fcb1a40',
        nOrder: 9,
        nameProvider: 'Otro',
        total: 6.06,
        payment: {
          paymentDate: 1603317600000,
          numCheque: 'PAG. 66631',
        },
      },
      {
        _id: '5f873e557fe519380fcb1a3d',
        nOrder: 8,
        nameProvider: 'Otro',
        total: 3.03,
        payment: {
          paymentDate: 1602712800000,
          numCheque: 'PAG. 66630',
        },
      },
    ]}
    countCheques={11}
    getCheques={action('getCheques')}
    totals={{
      1: 3.36,
      2: 4.5,
      3: 5.6,
      4: 5.7,
      total: 19.16,
    }}
    getTotals={action(('getTotals'))}
  />
);

PaymentsReport.storyName = 'Pagarés';

export { PaymentsReport };
