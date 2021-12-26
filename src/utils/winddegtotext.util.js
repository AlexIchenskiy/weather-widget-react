export default function windDegToText(angle) {
    const directions = 
        ['↑ North', '↗ NorthEast', '→ East', '↘ SouthEast', '↓ South', '↙ SouthWest', '← West', '↖ NorthWest'];
    return directions[Math.round(angle / 45) % 8];
}