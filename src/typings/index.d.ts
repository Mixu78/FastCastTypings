import ActiveCast from './ActiveCast';
import Caster from './Caster';
import CastRayInfo from './CastRayInfo';
import CastStateInfo from './CastStateInfo';
import CastTrajectory from './CastTrajectory';
import FastCastBehavior from './FastCastBehavior';

export { ActiveCast, Caster, CastRayInfo, CastTrajectory, CastStateInfo, FastCastBehavior }

/**
 * FastCast is the root class of the module and offers the surface level methods required to make it work.
 * This is the object returned from `require(FastCast)`.
 */
interface FastCast {
   /**
    * Construct a new Caster instance, which represents an entire gun or other projectile launching system.
    */
   new (): Caster

   /**
    * If true, verbose debug logging will be used, printing detailed information about what's going on during processing to the output.
    */
	DebugLogging: boolean;

   /**
      * If true, casts will be shown ray-by-ray in the 3D world. This is shown in the following method:
 
         A ConeHandleAdornment is created for each individual cast segment.
         It will be black when it is initially created.
         If the cast registers as a pierce, it will become red to signify that the cast would have hit, but was purposely ignored.
 
         A SphereHandleAdornment is created for each registered hit.
         It will be green if the impact stopped the ray.
         It will be red if it did not stop the ray due to piercing.
      */
   VisualizeCasts: boolean;

   /**
    * Creates a new FastCastBehavior, which contains information necessary to fire the cast properly.
    */
   newBehavior(): FastCastBehavior
}

declare const FastCast: FastCast;

export default FastCast;