function Demo() {
    const state = useBattery();
  
    return <pre>{JSON.stringify(state, null, 2)}</pre>;
  }
  

  /**
   {
  "charging": true,
  "level": 0.71,
  "chargingTime": null,
  "dischargingTime": null
}
   */