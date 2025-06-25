// import { DataSource } from 'typeorm';
// import { Role } from './role.entity';

// export const seedRoles = async (dataSource: DataSource) => {
//   const roleRepo = dataSource.getRepository(Role);
//   const roles = ['superadmin', 'admin', 'user'];

//   for (const name of roles) {
//     const exists = await roleRepo.findOneBy({ name });
//     if (!exists) {
//       const role = roleRepo.create({ name });
//       await roleRepo.save(role);
//     }
//   }

//   console.log('✅ Roles seeded');
// };

import { DataSource } from 'typeorm';
import { Role } from './role.entity';
export async function seedRoles(dataSource: DataSource) {
  const roleRepo = dataSource.getRepository(Role);
  const roles = ['superadmin', 'admin', 'user'];
  for (const name of roles) {
    const exists = await roleRepo.findOneBy({ name });
    if (!exists) {
      const role = roleRepo.create({ name });
      await roleRepo.save(role);
    }
  }
  console.log('✅ Roles seeded');
}
