import React, { Fragment, useEffect, useState } from 'react';

type User = {
  name: string;
  age: number;
  hobby?: string;
};

interface UserListProps {
  userList: User[];
}

// 基础组件
function UserList({ userList }: UserListProps) {
  return (
    <>
      {userList.map((user) => (
        <Fragment key={user.name}>
          <div>name: {user.name}</div>
          <div>age: {user.age}</div>
          {user.hobby && <div>hobby: {user.hobby}</div>}
        </Fragment>
      ))}
    </>
  );
}

// 高阶组件
function changeToHigher(
  WrappedComponent: React.ComponentType<UserListProps>,
  allUserList: User[][],
) {
  return function EnhancedComponent() {
    // 用于选择
    const [active, setActive] = useState<number>(0);
    const [selectUserList, setSelectUserList] = useState<User[]>(
      allUserList[active] || [],
    );

    const handleClick = () => {
      setActive((active + 1) % allUserList.length);
    };

    useEffect(() => {
      // 修改被选中的用户列表
      setSelectUserList(allUserList[active] || []);
    }, [active]);

    return (
      <>
        <WrappedComponent userList={selectUserList} />
        <button onClick={handleClick}>切换用户列表</button>
      </>
    );
  };
}

// 数据
const allUserList: User[][] = [
  [
    { name: '张三', age: 25, hobby: '编程' },
    { name: '李四', age: 30, hobby: '阅读' },
  ],
  [
    { name: '王五', age: 28, hobby: '游戏' },
    { name: '赵六', age: 35, hobby: '音乐' },
    { name: '钱七', age: 22 },
  ],
  [{ name: '孙八', age: 31, hobby: '运动' }],
];
const EnhanceUserList = changeToHigher(UserList, allUserList);

export default function HiggherOrderComponent() {
  return <EnhanceUserList />;
}
