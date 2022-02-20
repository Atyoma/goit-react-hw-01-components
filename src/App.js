// =====================Profile=======================

import Profile from './components/User/profile';
import user from '../src/user.json';
import Statistics from './components/statistics';
import data from '../src/data.json';
import friends from './friends';
import FriendList from 'components/friendList';
import transactions from './transactions';
import TransactionHistory from 'components/transactionHistory';
export default function App() {
  return (
    <div>
      <Profile
        img={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />;
      </>
      <>
        <FriendList friends={friends} />
      </>
      <>
        <TransactionHistory items={transactions} />
      </>
    </div>
  );
}

// =========================Statistics 1=================

// import Statistics from './components/statistics';
// import data from '../src/data.json';
// export default function App() {
//   return (
//     <>
//       <Statistics title="Upload stats" stats={data} />
//       <Statistics stats={data} />;
//     </>
//   );
// }

// =========================Statistics 2 TERNARN=================
// import Statistics from './components/statistics';
// import data from '../src/data.json';
// export default function App() {
//   const trueOrFalse = true;
//   return (
//     <>
//       {trueOrFalse ? (
//         <Statistics title="Upload stats" stats={data} />
//       ) : (
//         <Statistics stats={data} />
//       )}
//       ;
//     </>
//   );
// }

//===============================FRIENDS=========================
// import friends from './friends';
// import FriendList from 'components/friendList';

// export default function App() {
//   return (
//     <>
//       <FriendList friends={friends} />
//     </>
//   );
// }

// =====================Transaction====================
// import transactions from './transactions';
// import TransactionHistory from 'components/transactionHistory';

// export default function App() {
//   return (
//     <>
//       <TransactionHistory items={transactions} />
//     </>
//   );
// }
