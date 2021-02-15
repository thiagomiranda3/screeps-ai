Game.spawns['Spawn1'].spawnCreep(
    [WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE],
    'HarvesterBig',
    {
        memory: {
            role: 'harvester'
        }
    }
);

// Renova a quantidade de ticks que um creep tem até morrer por um custo menor que criar outro do zero
StructureSpawn.renewCreep

// Ativa o safe mode
Game.spawns['Spawn1'].room.controller.activateSafeMode();

// Cria uma planta da torre na posição passada. Um creeper tem quer ser enviado para contruí-la
Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );