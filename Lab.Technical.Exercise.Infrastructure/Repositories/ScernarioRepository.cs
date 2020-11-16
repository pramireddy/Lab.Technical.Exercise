using Lab.Technical.Exercise.Domain.EntityModels;
using Lab.Technical.Exercise.Domain.Interfaces.Repositories;
using Microsoft.Extensions.Hosting;
using System.Collections.Generic;
using System.IO;
using System.Xml.Serialization;

namespace Lab.Technical.Exercise.Infrastructure.Repositories
{
    public class ScernarioRepository : IScenarioRepository
    {
        public readonly IHostEnvironment _env;
        public ScernarioRepository(IHostEnvironment env)
        {
            _env = env;
        }
        public IEnumerable<Scenario> GetScenarios(string dataFileLocation)
        {
            dataFileLocation = $"{_env.ContentRootPath}\\wwwroot\\data.xml";
            if(dataFileLocation == null)
            {
                var location = _env.ContentRootPath;
            }
            return FetchScenariosFromDataFile(dataFileLocation);
        }

        private static IList<Scenario> FetchScenariosFromDataFile(string dataFileLocation)
        {
            IList<Scenario> scenarios;
            XmlSerializer reader = new XmlSerializer(typeof(ScenariosData));
            using (StreamReader file = new StreamReader(dataFileLocation))
            {
                ScenariosData overview = (ScenariosData)reader.Deserialize(file);
                scenarios = overview.Scenarios;
            }
            return scenarios;
        }
    }
}