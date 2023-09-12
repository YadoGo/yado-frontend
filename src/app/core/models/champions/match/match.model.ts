import { Team } from '../team/team.model'; // Ajusta la ruta al archivo real
import { Fixture } from '../fixture/fixture.model'; // Ajusta la ruta al archivo real
import { Attribute } from '../attribute/attribute.model'; // Ajusta la ruta al archivo real

export interface Match {
  teams: {
    home: Team;
    away: Team;
  };
  fixture: Fixture;
  attributes: Attribute[];
}
